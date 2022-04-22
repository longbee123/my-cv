
import './App.css';
import { Layout, Avatar, Descriptions, Timeline } from 'antd';
import { UserOutlined, EditTwoTone, ReadOutlined, LinkedinFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: '#bae7ff', height: '100%' }}>
          <Avatar style={{ width: '300px', height: '300px', margin: '15px 0px' }} icon={<UserOutlined />} src={'https://storage.googleapis.com/public-tripi/tripi-feed/img/458499zoj/avt.jpg'} />
        </Header>
        <Content style={{ padding: '50px', backgroundColor: '#e6f7ff' }}>
          <div className="flex-container">
            <div className='box'>
              <div style={{ textAlign: 'left' }}>
                <EditTwoTone />
                <span style={{ marginLeft: '10px', color: '#ffc53d', textTransform: 'uppercase', fontWeight: 'bold' }}>Giới Thiệu Bản Thân</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p className='text'>
                  Xin chào tôi là <b>Long</b>,
                  một <b>Lập Trình Viên</b> trẻ với hơn <b>2 năm kinh nghiệm</b> làm việc trong lĩnh vực phần mềm.
                  Ngoài ra, bản thân tôi cũng là một người hòa đồng,
                  vui tính, cởi mở và chủ động trong công việc,
                  rất thích giao tiếp với những người xung quanh mình :D.
                  Trong tương lai, tôi luôn mong muốn được theo đuổi sự đam mê trong lĩnh vực phần mềm
                  và cố gắng có được một cuộc sống ý nghĩa và hạnh phúc.
                </p>
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid #bae7ff', borderRadius: '25px' }}>
                <Descriptions title="Contact" labelStyle={{fontSize: '16px', fontWeight: 'bold'}}>
                  <Descriptions.Item label="Họ và tên" contentStyle={{fontSize: '16px'}}>Tiêu Công Sơn Long</Descriptions.Item>
                  <Descriptions.Item label="Ngày sinh" contentStyle={{fontSize: '16px'}}>12/03/1997</Descriptions.Item>
                  <Descriptions.Item label="Email"><MailOutlined /><span style={{ marginLeft: '10px', fontSize: '16px' }}>tieulongcp123@gmail.com</span></Descriptions.Item>
                  <Descriptions.Item label="Sđt"><PhoneOutlined /><span style={{ marginLeft: '10px', fontSize: '16px' }}>0948825122</span></Descriptions.Item>
                  <Descriptions.Item label="Linkedin" ><a href="https://www.linkedin.com/in/long-bee-1714b31aa/"><LinkedinFilled style={{fontSize: '25px'}} /></a></Descriptions.Item>
                </Descriptions>
              </div>
            </div>
            <div className='box'>
              <div style={{ textAlign: 'left' }}>
                <ReadOutlined />
                <span style={{ marginLeft: '10px', color: '#ffc53d', textTransform: 'uppercase', fontWeight: 'bold' }}>Kĩ Năng</span>
              </div>
              <div style={{ textAlign: 'left', marginTop: '20px' }}>
                <p className='text'>
                  <ul style={{ listStyleType: 'circle' }}>
                    <li style={{ color: '#1890ff' }}>Tốt nghiệp trường Đại Học Khoa Học Tự Nhiên Hà Nội</li>
                    <li style={{ color: '#1890ff' }}>Chuyên ngành: Toán Học</li>
                    <li style={{ color: '#1890ff' }}>Java 8</li>
                    <li style={{ color: '#1890ff' }}>Spring Framework (Spring Boot)</li>
                    <li style={{ color: '#1890ff' }}>HTML/CSS/JavaScript</li>
                    <li style={{ color: '#1890ff' }}>ReactJS</li>
                    <li style={{ color: '#1890ff' }}>Git</li>
                    <li style={{ color: '#1890ff' }}>MySQL, PostgreSQL, Redis</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className='box' style={{ backgroundColor: 'white', margin: '0px 10px', padding: '20px 50px' }}>
            <div style={{ textAlign: 'left' }}>
              <h1>Kinh Nghiệm Làm Việc</h1>
            </div>
            <div style={{ textAlign: 'left', margin: '40px' }}>
              <Timeline>
                <Timeline.Item color='green'>
                  <p className='text'>2020 - 2021 Smart OSC</p>
                  <p className='text'>Thực tập dự án website thương mai điện tử</p>
                  <p className='text'>Xây dựng BE: Sử dụng công nghệ Java 8, Spring Boot, Thymleaf, MySQL/PostgreSQL</p>
                </Timeline.Item>
                <Timeline.Item color='green'>
                  <p className='text'>2021 - Hiện tại VNTravel Group</p>
                  <p className='text'>Tham gia các dự án Marketing Tool và Grow User</p>
                  <p className='text'>Xây dựng BE: Sử dụng công nghệ Java 8, Spring Boot, MySQL, Redis</p>
                  <p className='text'>Xây dựng FE Admin Portal: Sử dụng công nghệ ReactJS, HTML/CSS/JS</p>
                  <p className='text'>Quản lý source code: Sử dụng Bitbucket + SourceTree</p>
                  <p className='text'>Quản lý task: Sử dụng Jira</p>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
