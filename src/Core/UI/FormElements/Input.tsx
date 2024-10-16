import { forwardRef } from "react";
import cn from "clsx";
import Feedback from "./Feedback";
import { IInputProps } from "./types";

interface IProps extends IInputProps {
    type?: string;
    bg?: "white" | "light";
}

const Input = forwardRef<HTMLInputElement, IProps>(
    (
        {
            className,
            bg,
            type,
            disabled,
            state,
            feedbackText,
            id,
            name,
            onChange,
            onClick,
            onBlur,
            value,
            readonly,
            showState,
            showErrorOnly,
            customStyle,
            min,
            max,
            ...restProps
        },
        ref
    ) => {
        const defaultClass =
            "block w-full h-14 rounded py-[0.188rem] px-5 text-base text-body border border-gray-200 placeholder-body";
        const focusClass =
            customStyle !== "nofocus" &&
            !readonly &&
            "focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-primary";
        const readOnlyAndDisabledClass =
            (readonly || disabled) && "bg-gray-300 opacity-100";
        const readOnlyFocusClass =
            customStyle !== "nofocus" &&
            readonly &&
            "focus:shadow-none focus:outline-0 focus:text-body";
        const successClass =
            !showErrorOnly && state === "success" && "!border-success";
        const warningClass =
            !showErrorOnly && state === "warning" && "!border-warning";
        const errorClass = state === "error" && "!border-danger";
        const focusBorderClass =
            customStyle !== "nofocus" && !state && "focus:border-primary";
        const noFocusClass = customStyle === "nofocus" && "focus:outline-0";

        return (
            <>
                <input
                    type={type}
                    disabled={disabled}
                    ref={ref}
                    className={cn(
                        "form-control",
                        defaultClass,
                        focusClass,
                        readOnlyAndDisabledClass,
                        readOnlyFocusClass,
                        successClass,
                        warningClass,
                        errorClass,
                        focusBorderClass,
                        noFocusClass,
                        bg === "white" && "bg-white",
                        bg === "light" && "bg-gray-200",
                        className
                    )}
                    id={id}
                    name={name}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    value={value}
                    readOnly={readonly}
                    min={min}
                    max={max}
                    {...restProps}
                />
                {feedbackText && showState && (
                    <Feedback state={state} showErrorOnly={showErrorOnly}>
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

Input.displayName = "Input";

Input.defaultProps = {
    type: "text",
    showState: true,
    showErrorOnly: true,
};

export default Input;
