import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PageToRead = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/booksData.json`;
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    };
    loadData();
  }, []);

  return (
    <div className="h-[600px] my-8">
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={books}
          margin={{ top: 20, right: 30, left: 20, bottom: 140 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            interval={0}
            dataKey="bookName"
            tick={{ fontSize: 12, angle: -40, textAnchor: "end" }}
          />

          <YAxis />
          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {books.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;
