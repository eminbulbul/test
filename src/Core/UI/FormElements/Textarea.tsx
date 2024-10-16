import { forwardRef } from "react";
import cn from "clsx";
import Feedback from "./Feedback";
import { IInputProps } from "./types";

interface IProps extends IInputProps {
    rows?: number;
    bg?: "white" | "light";
}

const Textarea = forwardRef<HTMLTextAreaElement, IProps>(
    (
        {
            className,
            bg,
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
            ...restProps
        },
        ref
    ) => {
        const defaultClass =
            "block w-full min-h-[120px] md:min-h-[180px] lg:min-h-[220px] rounded py-2.5 px-5 text-base text-body leading-relaxed border border-gray-200 placeholder-body";
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
            customStyle !== "nofocus" && !state && "focus:border-blue-100";
        const noFocusClass = customStyle === "nofocus" && "focus:outline-0";

        return (
            <>
                <textarea
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

Textarea.displayName = "Textarea ";

Textarea.defaultProps = {
    rows: 3,
    showState: true,
    showErrorOnly: true,
};

export default Textarea;
