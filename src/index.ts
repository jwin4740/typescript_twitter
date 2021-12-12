import *  as dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.TWITTER_API_KEY
console.warn(API_KEY)