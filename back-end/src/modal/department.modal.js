const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true
  },
  
}, {
  timestamps: true
});

const Department = mongoose.model('Category', DepartmentSchema);

module.exports = Department;
