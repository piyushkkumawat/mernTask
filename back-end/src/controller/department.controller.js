const Department = require('../modal/department.modal'); // Import the Department model

// Create a new department
exports.createDepartment = async (req, res) => {
  try {
    const { departmentName } = req.body;
    const department = new Department({ departmentName });
    const newDepartment = await department.save();
    res.json({
      status: 200,
      data: newDepartment,
      message: "Department created successfully",
    });
  } catch (error) {
    console.error("Failed to create department:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to create department",
    });
  }
};

// Get all departments
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json({
      status: 200,
      data: departments,
      message: "Departments retrieved successfully",
    });
  } catch (error) {
    console.error("Failed to get departments:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to get departments",
    });
  }
};

// Get a single department by ID
exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({
        status: 404,
        message: "Department not found",
      });
    }
    res.json({
      status: 200,
      data: department,
      message: "Department retrieved successfully",
    });
  } catch (error) {
    console.error("Failed to get department:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to get department",
    });
  }
};

// Update a department
exports.updateDepartment = async (req, res) => {
  try {
    const { departmentName } = req.body;
    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      { departmentName },
      { new: true }
    );
    if (!updatedDepartment) {
      return res.status(404).json({
        status: 404,
        message: "Department not found",
      });
    }
    res.json({
      status: 200,
      data: updatedDepartment,
      message: "Department updated successfully",
    });
  } catch (error) {
    console.error("Failed to update department:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update department",
    });
  }
};

// Delete a department
exports.deleteDepartment = async (req, res) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
    if (!deletedDepartment) {
      return res.status(404).json({
        status: 404,
        message: "Department not found",
      });
    }
    res.json({
      status: 200,
      data: deletedDepartment,
      message: "Department deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete department:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to delete department",
    });
  }
};
