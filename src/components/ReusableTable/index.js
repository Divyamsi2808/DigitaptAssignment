import React, { useState } from 'react';
import { MdHideSource } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const ReusableTable = ({ columns, data }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [searchText, setSearchText] = useState('');
    const [hiddenColumns, setHiddenColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Change as needed
  
    const sortingRows = key => {
      let direction = 'asc';
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      setSortConfig({ key, direction });
    };

  
    const handleSearch = text => {
      setSearchText(text);
    };
  
    const onClickHideIcon = key => {
      setHiddenColumns([...hiddenColumns, key]);
    };
  
    const onClickShowColumn = () => {
      setHiddenColumns([]);
    };
  
    const onClickPage = page => {
      setCurrentPage(page);
    };
  
    const sortedData = () => {
      let sorted = [...data];
  
      if (sortConfig.key !== null) {
        sorted = sorted.sort((a, b) => {
          const valueA = a[sortConfig.key];
          const valueB = b[sortConfig.key];
  
          if (valueA < valueB) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (valueA > valueB) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }
  
      if (searchText) {
        sorted = sorted.filter(row =>
          columns.some(column => String(row[column.key]).toLowerCase().includes(searchText.toLowerCase()))
        );
      }
  
      return sorted;
    };
  
    const visibleColumns = columns.filter(column => !hiddenColumns.includes(column.key));
  
    const paginatedData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return sortedData().slice(startIndex, endIndex);
    };
  
    return (
      <div className='main-container'>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => handleSearch(e.target.value)}
          className='search'
        />
        <table className='table' data-resizable = {true}>
          <thead className='table-head'>
            <tr className='table-row'>
              {visibleColumns.map(column => (
                <th  
                className='column-names'
                  key={column.key}
                  style={{ width: 100 }}
                  onClick={() => sortingRows(column.key)}
                >
                  <div className='column-div'>
                  <button className='hide-btn' onClick={() => onClickHideIcon(column.key)}>{
                    <MdHideSource/>
                  }</button>
                  {column.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='table-body'>
            {paginatedData().map((row, index) => (
              <tr className='table-row' key={index}>
                {visibleColumns.map(column => (
                  <td className='table-data' key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='footer-div'>

        <div>
          {Array.from({ length: Math.ceil(sortedData().length / itemsPerPage) }, (_, i) => (
            <button key={i} onClick={() => onClickPage(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
        <button className = "show-all-btn" onClick={onClickShowColumn}>Show All</button>
        </div>
      </div>
    );
  };

export default ReusableTable;

handleSort