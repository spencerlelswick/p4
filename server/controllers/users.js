const express = require('express')
const { User } = require('../models')


async function index(req,res,next) {
  try {
    res.json(await User.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

async function create(req,res,next) {
  try {
    res.json(await User.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

async function show(req,res,next) {
    try {
        res.json(await User.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
      }
};


async function destroy(req,res,next) {
  try {
    res.json(await User.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};


async function update(req,res,next) {
  try {
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    res.status(400).json(error);
  }
};


module.exports = {
	index,
	create,
	show,
	delete: destroy,
	update
}
