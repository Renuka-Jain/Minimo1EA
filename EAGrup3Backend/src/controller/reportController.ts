import User from '../model/User';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Report from '../model/Report';


const register = async (req: Request, res: Response) => {
    try{
        const ownerMAIL = req.body.mail;
        const user1 = await User.findOne({ email: ownerMAIL });
        if (!user1) {
            return res.status(400).json({ message: 'User not found' });
        }
        const content = req.body.content;
        const date = req.body.date;
        const accepted = req.body.accepted;
        const newReport = new Report({content, owner: user1._id, date, accepted });
        await newReport.save();
        res.status(200).json({ auth: true });
    }catch (error) {
		res.status(500).json({message: 'error unknown', error });
	}
};



const getall = async (req: Request, res: Response) => {
	const reports = await Report.find().populate('owner');
	res.status(200).json(reports);
};

const getone = async (req: Request, res: Response) => {
	const report = await Report.findById(req.params.id).populate('owner');
	if (!report) {
		return res.status(404).send('No report found.');
	}
	res.status(200).json(report);
};

const del = async (req: Request, res: Response) => {
	try {
		await Report.findByIdAndRemove(req.params.id);
		res.status(200).json({ status: 'deleted' });
	}
	catch (error) {
		res.status(500).json({message: 'error unknown', error });
	}
};

const update = async (req: Request, res: Response) => {
	try{
        const user1 = await User.findOne({ email: req.body.mail });
        const ownerID = user1._id;
		const content = req.body.content;
        const date = req.body.date;
        const accepted = req.body.accepted;
		const repoUpdated = await Report.findByIdAndUpdate(req.body._id, {
			content, ownerID, date, accepted
		}, {new: true});
		res.json(repoUpdated).status(200);
	}catch (error) {
		res.status(401).send(error);
	}
};


/*
const addSerie = async (req: Request, res: Response) => {
    
	//let array: Series[]  = [];
	let newserie = new Series();
	try{
		const user = await User.findById(req.params.idUser);
		if (!user) {
			return res.status(404).send('No user found.');
		}

		const serie = await Series.findById(req.params.idSerie);
		if (!serie) {
			return res.status(402).send('No serie found.');
		}
		newserie = serie;
		let array = user.series

		user.series.push(serie._id!);

		await User.findByIdAndUpdate(req.params.idUser, user, {new: true});
		/*await serie.save( (err: any) => {
			if (err) {
				return res.status(500).send(err);
			}
			event.update(
				{ _id: event._id },
				{ $push: { comments: comment._id } },
			);
			event.save();
			res.status(200).json({ status: 'Comment saved' });
		});
		res.json(user).status(200);
		
	}catch (error) {
		res.status(401).send(error);
	}
    
};
*/




export default {
	register,
	getall,
	getone,
	del,
	update
};