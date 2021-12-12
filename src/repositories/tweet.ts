import {getRepository} from "typeorm";
import {Tweet} from '../models/tweet'

export interface ITweetPayload {
  firstName: string;
  lastName: string;
  email: string
}

export const getTweets  = async () :Promise<Array<Tweet>> => {
  const tweetRepository = getRepository(Tweet);
  return tweetRepository.find()
}

export const createTweet  = async (payload: ITweetPayload) :Promise<Tweet> => {
  const tweetRepository = getRepository(Tweet);
  const tweet = new Tweet()
  return tweetRepository.save({
    ...tweet,
    ...payload
  })
}

export const getTweet  = async (id: number) :Promise<Tweet| null> => {
  const tweetRepository = getRepository(Tweet);
  const tweet = await tweetRepository.findOne({id: id})
  if (!tweet) return null
  return tweet
}
