import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values"

export default defineSchema({
    //ut
    users:defineTable({
        name:v.string(),
        tokenIdentifier:v.string(),//id for auth
        email:v.string(),
        imageUrl:v.optional(v.string()),
        

        hasCompletedOnboarding:v.boolean(),

        location:v.optional(
          v.object({
            city:v.string(),
            state:v.optional(v.string()),
            country:v.string(),
          })  
        ),

        interests:v.optional(v.array(v.string())),//min three events

        freeEventsCreated:v.number(),//track free number

        createdAt:v.number(),
        updatedAt:v.number(),
    }).index("by_token",["tokenIdentifier"]),
})