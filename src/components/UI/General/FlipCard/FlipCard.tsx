import { CSSProperties, FC, HTMLAttributes, memo, useRef } from "react";
import styles from "./FlipCard.module.css";

interface CommonFlipCardProps<T = HTMLDivElement> {
  children: FlipCArdChildren;
  width?: string | number | undefined;
  height?: string | number | undefined;
  style?: HTMLAttributes<T>["style"];
}
type FlipCardProps =
  | (CommonFlipCardProps & {
      flipType: "auto";
      isManualFlipped?: null;
    })
  | (CommonFlipCardProps & { flipType: "manual"; isManualFlipped: boolean });

const FlipCard: FC<FlipCardProps> = memo(
  ({
    children,
    width = "350px",
    height: defaultHeight = "600px",
    flipType = "500px",
    isManualFlipped = null,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);

    // const [height, setFinalHeight] = useState<number | undefined>(undefined);

    // useEffect(() => {
    //   const updateHeight = () => {
    //     const frontHeight = frontRef.current?.offsetHeight || 0;
    //     const backHeight = backRef.current?.offsetHeight || 0;
    //     const maxHeight = Math.max(frontHeight, backHeight);
    //     setFinalHeight(maxHeight);
    //   };

    //   const resizeObserver = new ResizeObserver(updateHeight);
    //   if (frontRef.current) resizeObserver.observe(frontRef.current);
    //   if (backRef.current) resizeObserver.observe(backRef.current);

    //   updateHeight(); // Initial sync

    //   return () => resizeObserver.disconnect();
    // }, [children]);

    const style: CSSProperties = { width, height: defaultHeight };

    const cardClassName = `${styles.flip_card} ${
      flipType === "auto"
        ? styles.auto_flip
        : isManualFlipped
        ? styles.manual_flip
        : ""
    }
    ${isManualFlipped ? styles.is_flipped : ""}
    `;

    // useEffect(() => {
    //   if (containerRef.current) {
    //     const front = containerRef.current.querySelector(
    //       ".front"
    //     ) as HTMLElement;
    //     const back = containerRef.current.querySelector(".back") as HTMLElement;

    //     const maxHeight = Math.max(
    //       front?.offsetHeight || 0,
    //       back?.offsetHeight || 0
    //     );
    //     containerRef.current.style.height = `${maxHeight}px`;
    //   }
    // }, [children]);

    return (
      <div ref={containerRef} className={cardClassName} style={style}>
        <div className={styles.inner}>
          <div ref={frontRef} className={styles.front}>
            {children[0]}
          </div>
          <div ref={backRef} className={styles.back}>
            {children[1]}
          </div>
        </div>
      </div>
    );
  }
);

export default FlipCard;
