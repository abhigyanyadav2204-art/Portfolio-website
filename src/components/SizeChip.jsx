import "./SizeChip.css";

/** Decorative "2×4" brick-size badge. Purely flavour, hidden from AT. */
function SizeChip({ size }) {
  const [a, b] = size;
  return (
    <span className="size-chip mono" aria-hidden="true">
      {a}×{b}
    </span>
  );
}

export default SizeChip;
