import Organization from "./organization.models.js";
import asyncHandler from "express-async-handler";

// Create a new organization
const createOrganization = asyncHandler(async (req, res) => {
  try {
    const newOrganization = await Organization.create(req.body);

    res.status(201).json(newOrganization);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all organizations
const getAllOrganizations = asyncHandler(async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    throw new Error(error);
  }
});

// Get an organization by ID
const getOrganizationById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findById(id);
    if (!organization) {
      res.status(404).json(`Organization ${id} not found`);
    }
    res.status(200).json(organization);
  } catch (error) {
    throw new Error(error);
  }
});

// Update an organization by ID
const updateOrganization = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findById(id);
    if (!organization) {
      res.status(404).json(`Organization ${id} not found`);
    }
    const updatedOrganization = await Organization.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(202).json(updatedOrganization);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete an organization by ID
const deleteOrganization = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findById(id);
    if (!organization) {
      res.status(404).json(`Organization ${id} not found`);
    }
    await Organization.findByIdAndDelete(id);
    res.status(204).json(`Organization ${id} deleted`);
  } catch (error) {
    throw new Error(error);
  }
});
export {
  createOrganization,
  getAllOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
};