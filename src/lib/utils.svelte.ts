export function ref<Type>(initial: Type) {
	let value = $state(initial);
	return {
		get value() {
			return value;
		},
		set value(v) {
			value = v;
		}
	};
}

// https://x.com/puruvjdev/status/1787037268143689894
type Primitive = string | null | symbol | boolean | number | undefined | bigint;

function is_primitive(val: any): val is Primitive {
  return val !== Object(val) || val === null;
};

function persisted<T>(key: string, initial: T) {
  const existing = localStorage.getItem(key);

  const primitive = is_primitive(initial);
  const parsed_value = existing ? JSON.parse(existing) : initial;

  let state = $state<T extends Primitive ? { value: T } : T>(
    primitive ? { value: parsed_value } : parsed_value,
  );

  $effect.root(() => {
    $effect(() => {
      // @ts-ignore
      localStorage.setItem(key, JSON.stringify(primitive ? state.value : state));
    });
  });

  return state;
}

// Usage:
// const theme = persisted('theme', 'dark')
// theme.value === 'light'
// theme.value = 'light'

// const preferences = persisted('preferences', { reduced: true, dark: false });
// preferences.reduced = false // No need of preferences.value.reduced