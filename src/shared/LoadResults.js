import "./LoadResults.css";
export default function LoadResult({ result }) {
  return (
    <div className="result-container">
      {result.map((item) => (
        <div>
          <div
            className="result-img"
            style={{ backgroundImage: `url(${item.images.original.url})` }}
          ></div>

          <p>{item.username}</p>
          {item.trending_datetime}
        </div>
      ))}
    </div>
  );
}
