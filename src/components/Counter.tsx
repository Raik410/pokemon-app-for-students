import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      {count}
      <button
        className="text-3xl text-red-600"
        onClick={() => setCount(count + 1)}
      >
        Increament
      </button>
    </div>
  );
};

export default Counter;
