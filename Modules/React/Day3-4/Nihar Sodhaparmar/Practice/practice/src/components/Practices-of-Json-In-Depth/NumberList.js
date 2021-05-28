// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// A good rule of thumb is that elements inside the map() call need keys
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li>{value}</li>
  );
}

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     // Wrong! The key should have been specified here:
//     <ListItem key={number.toString()} value={number} />
//   ));
//   return <ul>{listItems}</ul>;
// }

// Embedding map() in JSX

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

export default NumberList;
