import "./LoadResults.css";
export default function LoadResult({ result }) {
  return (
    <div className="result-container">
      {result.length === 0
        ? "...wait a while."
        : result.map((item) => (
            <div className="card">
              <div className="img-holder">
                <div
                  className="result-img"
                  style={{
                    backgroundImage: `url(${item.images.original.url})`,
                  }}
                ></div>
              </div>

              <div className="card-detail">
               <span> by : {item.username} </span>
                <span>date of trend : {item.trending_datetime} </span>
              </div>
            </div>
          ))}
    </div>
  );
}
