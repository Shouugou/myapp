import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    searchQuery: '', // 状态用于存储搜索框的值
    searchResult: '' // 状态用于存储搜索结果
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value }); // 更新搜索框的值
  };

  handleSearch = (event) => {
    event.preventDefault(); // 阻止表单默认提交行为
    this.setState({ searchResult: this.state.searchQuery }); // 设置搜索结果为搜索框的值
  };

  render() {
    const { searchQuery, searchResult } = this.state; // 从状态中解构出值

    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/services">服务</Link></li>
            <li>
              <form onSubmit={this.handleSearch}>
                <input
                  type="text"
                  placeholder="搜索"
                  value={searchQuery}
                  onChange={this.handleInputChange}
                />
                <button type="submit">搜索</button>
              </form>
            </li>
          </ul>
        </nav>
        {searchResult && ( // 如果有搜索结果，则显示
          <div>
            <p>搜索结果: {searchResult}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;