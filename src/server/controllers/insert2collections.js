import Subjects from '../models/subjects';
import Sections from '../models/sections';
import Posts from '../models/posts';
import mongoose from 'mongoose';

const getSubjects = async (req, res) => {
  try {
    // them du lieu bang sections
    // var SecCollections = new Sections({
    //   _id: new mongoose.mongo.ObjectId(),
    //   name: "Bai Tap"    
    // });
    // SecCollections.save((err) => {
    //   if (err) return console.log(err);
    //   Subjects.findOne({ _id: "5bea67891d63503040632221" })
    //   .exec((err, docs) => {
    //     if (err) return console.log(err)
    //     docs.sections = [...docs.sections, SecCollections._id]
    //     console.log(docs.sections);
    //     docs.save()
    //   })
    // });

    // them du lieu bang post
    // var PosCollections = new Posts({
    //   _id: new mongoose.mongo.ObjectId(),
    //   title: "Bai tap 1",
    //   content: "<h1>hello word 1</h1>",
    // });
    // PosCollections.save((err) => {
    //   if (err) return console.log(err);
    //   Sections.findOne({ _id: "5bea7c7c00681e1824404e0a" })
    //   .exec((err, docs) => {
    //     if (err) return console.log(err)
    //     console.log(docs);
    //     docs.posts = [...docs.posts, PosCollections._id]
    //     docs.save()
    //   })
    // });

    Subjects.
    findOne({ _id: "5bea67638443302de4f66967"}).populate([{ path: 'sections', populate: { path: 'posts' }}]).
    exec(function (err, story) {
      if (err) console.log(err);
      // story.sections.map((e, i) => console.log("hang",e.name));
      console.log('The author is %s', story);
      res.json(story)
      // prints "The author is Ian Fleming"
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: 'Internal Server Error' });
  }
};

