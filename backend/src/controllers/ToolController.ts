import { Request, Response } from 'express';
import Tool from '../models/Tool';

export const createTool = async (req: Request, res: Response) => {
  try {
    const newTool = new Tool(req.body);
    await newTool.save();
    res.status(201).json(newTool);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getTools = async (req: Request, res: Response) => {
  try {
    const tools = await Tool.find();
    res.status(200).json(tools);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getToolById = async (req: Request, res: Response) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) {
      return res.status(404).json({ message: 'Tool not found' });
    }
    res.status(200).json(tool);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTool = async (req: Request, res: Response) => {
  try {
    const updatedTool = await Tool.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTool) {
      return res.status(404).json({ message: 'Tool not found' });
    }
    res.status(200).json(updatedTool);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTool = async (req: Request, res: Response) => {
  try {
    const deletedTool = await Tool.findByIdAndDelete(req.params.id);
    if (!deletedTool) {
      return res.status(404).json({ message: 'Tool not found' });
    }
    res.status(200).json({ message: 'Tool deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
