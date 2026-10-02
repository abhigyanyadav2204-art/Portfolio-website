import "./MetricStamp.css";

/**
 * Debossed plate for a metric value+label. Not decorative styling for
 * its own sake: off-white text is only ~4.0:1 on the red brick and
 * ~2.2:1 on orange, both failing AA, so small text can't sit directly
 * on a coloured brick face. Mixing the brick 62% toward black (the
 * `.plate` utility, in brick.css) lands >=9:1 on every palette colour.
 */
function MetricStamp({ value, label, tone = "plate" }) {
  return (
    <div className={`metric-stamp ${tone === "plate" ? "plate" : ""}`.trim()}>
      <strong className="metric-stamp__value">{value}</strong>
      <span className="metric-stamp__label">{label}</span>
    </div>
  );
}

export default MetricStamp;
