declare type Replace<T, K extends keyof T, V> = Partial<
	Omit<T, K> & { [P in K]: V }
>
