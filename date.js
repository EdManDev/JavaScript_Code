function formatDate(date) {
  return date.toLocaleDateString();
}

const text = {
  date: new Date()
};

function Index(props) {
  return (
    <div>
      <div className="text">{formatDate(props.date)}</div>
    </div>
  );
}

ReactDOM.render(<Index date={text.date} />, document.getElementById("root"));
