import PropTypes from 'prop-types';

function isPrime(num) {
  if (num < 2) return false;
  else if (num % 2 === 0) return num === 2;
  let root = Math.round(Math.sqrt(num));
  for (let i = 3; i <= root; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

const Home = ({ num1, num2, string }) => {
  // useE
  return (
    <div className="text-center my-8 text-3xl space-y-6">
      <div>
        { num1 % 2 === 0 ? "Even!" : "Odd!" }
      </div>
      <div>{ isPrime(num2) ? "Prime!" : "Not Prime!" }</div>
      <div>{ string === string.split("").reverse().join("") ? "Palindrome" : "Not Palindrome" }</div>
    </div>
  );
};

Home.propTypes = {
  num1: PropTypes.number,
  num2: PropTypes.number,
  string: PropTypes.string,
};

Home.defaultProps = {
  num1: 0,
  num2: 0,
  string: "HOLA"
};

export default Home;