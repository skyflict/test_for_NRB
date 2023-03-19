import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEmployees } from "./Redux/actions";

const Employees = ({ employees, loading, error, getEmployees }) => {
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      <h1>Список работников</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            ID: {employee.employeeId} <br />
            Имя: {employee.firstName}
            <br />
            Фамилия: {employee.lastName}
            <br />
            День рождения: {new Date(employee.birthday).toLocaleDateString()}
            <br />
            Рост: {employee.height}
            <br />
            <button>Удалить</button>
            <br />
            <button>Редактировать</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees.employees,
  loading: state.employees.loading,
  error: state.employees.error,
});

export default connect(mapStateToProps, { getEmployees })(Employees);
