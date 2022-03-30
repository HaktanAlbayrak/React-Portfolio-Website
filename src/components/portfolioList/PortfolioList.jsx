import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "PortfolioList active" : "portfolipList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
