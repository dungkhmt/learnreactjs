import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import './Bai6.scss';
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row, Input, Col, Table, Button } from "antd";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function Bai6() {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);

  const handleAddRow = () => {
    setData([
      ...data,
      {
        id: length + 1,
        x: "",
        y: ""
      }
    ]);
    setLength(length + 1);
  };

  const handleUpdate = (id, key, value) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  // Sắp xếp dữ liệu theo trường x trước khi tạo chartData
  const sortedData = [...data].sort((a, b) => a.x - b.x);

  // Tạo column cho table X, Y
  const columns = [
    {
      title: "X",
      dataIndex: "x",
      editable: true,
      render: (_, record) => (
        <Input value={record.x} onChange={(e) => handleUpdate(record.id, 'x', parseInt(e.target.value, 10) || 0)} />
      )
    },
    {
      title: "Y",
      dataIndex: "y",
      editable: true,
      render: (_, record) => (
        <Input value={record.y} onChange={(e) => handleUpdate(record.id, 'y', parseInt(e.target.value, 10) || 0)} />
      )
    },
    {
      title: "Action",
      render: (_, record) => (
        <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} onClick={() => handleDelete(record.id)} />
      )
    }
  ];

  // Chuyển đổi dữ liệu thành định dạng mà Bar chart sử dụng, với các nhãn đã được sắp xếp
  const chartData = {
    labels: sortedData.map(item => item.x.toString()), // Trục X sắp xếp theo giá trị x
    datasets: [
      {
        data: sortedData.map(item => item.y), // Trục Y
        backgroundColor: '#CC7A00'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Y'
        }
      }
    }
  };

  return (
    <>
      <h1 style={{fontSize: '28px',color: '#FF9500',fontWeight: 500,textAlign: 'center'}}>Bài 6: Vẽ biểu đồ</h1>
      <Row>
        <Col xs={8}>
          <h1 style={{ fontWeight: '600', fontSize: '24px', marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>
            Nhập X,Y để vẽ biểu đồ
          </h1>
          <Button style={{ marginBottom: '20px' }} onClick={handleAddRow}>
            <PlusCircleOutlined /> Thêm hàng
          </Button>
          <Table columns={columns} dataSource={data} rowKey="id" pagination={false} bordered />
        </Col>
        <Col xs={16}>
          <Bar options={options} data={chartData} />
        </Col>
      </Row>
    </>
  );
}

export default Bai6;
