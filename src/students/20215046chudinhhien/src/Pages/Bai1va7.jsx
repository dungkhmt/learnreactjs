import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';
import './Bai1va7.scss';
import * as XLSX from 'xlsx';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs; // Sử dụng font mặc định của pdfMake để tránh lỗi font tiếng việt

export const Bai1va7 = () => {
    const [form] = Form.useForm();
    const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students")) || []);

    const handleFormSubmit = (values) => {
        const { name, id, dob, email } = values;
        const checkStudent = students.find(student => student.id === id);

        if (!checkStudent) {
            const newStudent = { name, id, dob: dob.format('YYYY-MM-DD'), email };
            const updatedStudents = [...students, newStudent];
            setStudents(updatedStudents);
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            form.resetFields("");
            notify('success', `Đã thêm thành công sinh viên ${name}`);
        } else {
            notify('error', `MSSV: ${id} đã tồn tại. Vui lòng kiểm tra lại`);
        }
    };

    const handleDelete = (index) => {
        const updatedStudents = [...students];
        updatedStudents.splice(index, 1);
        setStudents(updatedStudents);
        localStorage.setItem("students", JSON.stringify(updatedStudents));
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(students.map(({ name, id, dob, email }) => ({
            "Họ Tên": name,
            "MSSV": id,
            "Ngày sinh": dob,
            "Email": email,
            "Địa chỉ": ""
        })));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Students');
        XLSX.writeFile(wb, 'students.xlsx');
    };

    const exportToPDF = () => {
        const docDefinition = {
            content: [
                { text: 'Danh sách sinh viên', style: 'header' },
                {
                    table: {
                        headerRows: 1,
                        widths: ['auto', 'auto', '*', 'auto', 'auto'],
                        body: [
                            [
                                { text: 'STT', style: 'tableHeader' },
                                { text: 'MSSV', style: 'tableHeader' },
                                { text: 'Tên', style: 'tableHeader' },
                                { text: 'Ngày sinh', style: 'tableHeader' },
                                { text: 'Email', style: 'tableHeader' }
                            ],
                            ...students.map((student, index) => [
                                { text: index + 1, style: 'tableData' },
                                { text: student.id, style: 'tableData' },
                                { text: student.name, style: 'tableData' },
                                { text: student.dob, style: 'tableData' },
                                { text: student.email, style: 'tableData' }
                            ])
                        ]
                    },
                    layout: {
                        fillColor: (rowIndex, node, columnIndex) => {
                            return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                        },
                        hLineColor: (i, node) => {
                            return (i === 0 || i === node.table.body.length) ? 'black' : '#CCCCCC';
                        },
                        vLineColor: (i, node) => {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : '#CCCCCC';
                        },
                        hLineWidth: (i, node) => {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: (i, node) => {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        paddingLeft: (i, node) => 10,
                        paddingRight: (i, node) => 10,
                        paddingTop: (i, node) => 4,
                        paddingBottom: (i, node) => 4
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black',
                    fillColor: '#CCCCCC',
                    alignment: 'center'
                },
                tableData: {
                    margin: [0, 5, 0, 5]
                }
            }
        };

        pdfMake.createPdf(docDefinition).download('students.pdf');
    };

    const notify = (type, message) => {
        toast[type](message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div className="Bai1" style={{ padding: 32 }}>
            <h1>Bài 1 + 7: Thao tác với Data Table và export data dạng excel và pdf</h1>
            <Form onFinish={handleFormSubmit} className="form" form={form}>
                <Row gutter={50}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Họ và tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="MSSV" name="id" rules={[{ required: true, message: 'Vui lòng nhập MSSV' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={50}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Ngày sinh" name="dob" rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button className="btn" type="primary" htmlType="submit">Thêm</Button>
                </Form.Item>
            </Form>

            <table id="my-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MSSV</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Email</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.dob}</td>
                            <td>{student.email}</td>
                            <td><Button className="btn" type="danger" onClick={() => handleDelete(index)}>Xóa</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="export">
                <p className="export--title">Export:</p>
                <Button className="btn" onClick={exportToExcel}>Excel</Button>
                <Button className="btn" onClick={exportToPDF}>PDF</Button>
            </div>
            <ToastContainer />
        </div>
    );
};
