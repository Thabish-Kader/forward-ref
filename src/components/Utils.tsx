import React, { forwardRef } from "react";

export const Button = forwardRef<
	HTMLButtonElement,
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
>(({ className, children, ...rest }, ref) => {
	return (
		<button ref={ref} className={`btn ${className}`} {...rest}>
			{children}
		</button>
	);
});

export const Input = forwardRef<
	HTMLInputElement,
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>
>(({ className, ...rest }, ref) => {
	return <input ref={ref} className={`btn ${className}`} {...rest} />;
});
