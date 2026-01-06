const axios = require('axios');

module.exports = async (req, res) => {
  const targetUrl = 'https://thietbidayhocso.edu.vn/3dhoahocthpt/'; // Thay link bạn muốn vào đây
  try {
    const response = await axios.get(targetUrl);
    res.setHeader('Content-Type', 'text/html');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Lỗi khi tải trang');
  }
};