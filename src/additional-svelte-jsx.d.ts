declare namespace svelte.JSX {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface HTMLProps<T> {
		onenter?: CompositionEventHandler<T>;
		onexit?: CompositionEventHandler<T>;
	}
}