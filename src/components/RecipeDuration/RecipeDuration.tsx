import { ClockCircle } from "../../icons";
import Inline from "../Inline/Inline";

type RecipeDurationProps = {
  duration: number;
};

const RecipeDuration = ({ duration }: RecipeDurationProps) => (
  <Inline gap={4} align="center">
    <ClockCircle size={16} color="var(--color-gray-800)" />
    <p
      className="text-xs-regular"
      style={{
        paddingTop: "2px",
        textTransform: "capitalize",
        color: "var(--color-gray-800)",
      }}
    >
      {duration <= 0
        ? "n/a"
        : duration > 60
          ? `${Math.floor(duration / 60)}h ${duration % 60}min`
          : `${duration} min`}
    </p>
  </Inline>
);

export default RecipeDuration;
