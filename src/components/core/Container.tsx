import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
};

const Container = ({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn("mx-auto w-full max-w-316 px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
