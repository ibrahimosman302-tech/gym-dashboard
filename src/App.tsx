import { useState, useEffect, useRef, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wiltobkgbikotjyrebyt.supabase.co";
const SUPABASE_KEY = "sb_publishable_FBL1tdXjjrfW0TnHptTN6Q_XNiBpJzM";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const INITIAL_DATA = {
  logName: "Training Log",
  programmeName: "Ramadan Programme",
  blocks: [
    {
      block: "BLOCK 1",
      weeks: [
        {
          label: "Week 1",
          dates: { WEEKEND_HEAVY: "03/03/2025", WEEKDAY_MEDIUM: "05/03/2025", WEEKDAY_HEAVY: "07/03/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "INCLINE CLOSE GRIP BENCH PRESS", weight: "60", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "50", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP — BAND SUPPORT", weight: "BW", sets: "3", reps: "5" },
              { exercise: "CABLE BAR PULLS", weight: "35", sets: "3", reps: "12" },
              { exercise: "EZ bar strict curl SS", weight: "20", sets: "3", reps: "10" },
              { exercise: "Cable skull crushers SS", weight: "30", sets: "3", reps: "10" },
              { exercise: "DB lateral raise (rack)", weight: "10", sets: "3", reps: "10" },
              { exercise: "Reverse curls — barbell", weight: "20", sets: "3", reps: "10" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "5", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "BW", sets: "2", reps: "12", isBackOff: true },
              { exercise: "Reverse Grip Lat pulldown", weight: "50", sets: "3", reps: "10" },
              { exercise: "Preacher curls SS", weight: "10", sets: "3", reps: "10" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "25", sets: "3", reps: "10" },
              { exercise: "Rear delt cable face pulls", weight: "20", sets: "3", reps: "10" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Dumbbell Shoulder press", weight: "20", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "15", sets: "2", reps: "Same as top set", isBackOff: true },
              { exercise: "ISO HOLDS 5 UP MID LOW", weight: "BW", sets: "3", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "20", sets: "3", reps: "12" },
              { exercise: "Cable curls long bar SS", weight: "20", sets: "3", reps: "10" },
              { exercise: "Tricep pushdowns short bar SS", weight: "20", sets: "3", reps: "12" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "10" },
              { exercise: "Cable lateral raises", weight: "10", sets: "3", reps: "10" },
            ],
          },
        },
        {
          label: "Week 2",
          dates: { WEEKEND_HEAVY: "09/03/2025", WEEKDAY_MEDIUM: "11/03/2025", WEEKDAY_HEAVY: "13/03/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "INCLINE CLOSE GRIP BENCH PRESS", weight: "75", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "67.5", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP — BAND SUPPORT", weight: "BW", sets: "3", reps: "5" },
              { exercise: "CABLE BAR PULLS", weight: "45", sets: "3", reps: "12" },
              { exercise: "EZ bar strict curl SS", weight: "25", sets: "3", reps: "12" },
              { exercise: "Skull crushers SS", weight: "25", sets: "3", reps: "12" },
              { exercise: "DB lateral raise (rack)", weight: "15", sets: "3", reps: "10" },
              { exercise: "Reverse curls — barbell", weight: "20", sets: "3", reps: "12" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "7.5", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "BW", sets: "2", reps: "15", isBackOff: true },
              { exercise: "Weighted pull up", weight: "10", sets: "3", reps: "2" },
              { exercise: "Preacher curls SS", weight: "10", sets: "3", reps: "12" },
              { exercise: "EZ SKULL CRUSH SS", weight: "25", sets: "3", reps: "10" },
              { exercise: "Thick hammer grip", weight: "10", sets: "3", reps: "12" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Dumbbell Shoulder press", weight: "25", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "15", sets: "2", reps: "Same as top set", isBackOff: true },
              { exercise: "ISO HOLDS", weight: "45", sets: "3", reps: "8" },
              { exercise: "Rear delt cable face pulls", weight: "20", sets: "3", reps: "12" },
              { exercise: "EZ BAR CURLS", weight: "20", sets: "3", reps: "10" },
              { exercise: "Close grip bench press", weight: "35", sets: "3", reps: "10" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "10" },
              { exercise: "Cable lateral raises", weight: "10", sets: "3", reps: "10" },
            ],
          },
        },
        {
          label: "Week 3",
          dates: { WEEKEND_HEAVY: "16/03/2025", WEEKDAY_MEDIUM: "18/03/2025", WEEKDAY_HEAVY: "20/03/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "INCLINE CLOSE GRIP BENCH PRESS", weight: "85", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "75", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP — BAND SUPPORT", weight: "BW", sets: "3", reps: "6" },
              { exercise: "CABLE BAR PULLS", weight: "50", sets: "3", reps: "12" },
              { exercise: "EZ bar strict curl SS", weight: "30", sets: "3", reps: "8" },
              { exercise: "EZ skull crushers SS", weight: "30", sets: "3", reps: "10" },
              { exercise: "DB lateral raise (rack)", weight: "15", sets: "3", reps: "12" },
              { exercise: "Reverse curls — barbell", weight: "22.5", sets: "3", reps: "10" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "10", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "BW", sets: "2", reps: "15", isBackOff: true },
              { exercise: "Weighted pull up", weight: "10", sets: "4", reps: "2" },
              { exercise: "Preacher curls SS", weight: "10", sets: "4", reps: "12" },
              { exercise: "EZ SKULL CRUSHER", weight: "25", sets: "4", reps: "12" },
              { exercise: "Thick hammer grip", weight: "10", sets: "3", reps: "12" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Dumbbell Shoulder press", weight: "25", sets: "3", reps: "12" },
              { exercise: "Back Off Sets", weight: "20", sets: "2", reps: "12", isBackOff: true },
              { exercise: "ISO HOLDS", weight: "BW", sets: "4", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "3", reps: "12" },
              { exercise: "EZ BAR CURLS", weight: "25", sets: "3", reps: "10" },
              { exercise: "Close grip bench press", weight: "40", sets: "3", reps: "12" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "12" },
              { exercise: "Cable lateral raises", weight: "10", sets: "3", reps: "12" },
            ],
          },
        },
        {
          label: "Week 4",
          dates: { WEEKEND_HEAVY: "23/03/2025", WEEKDAY_MEDIUM: "25/03/2025", WEEKDAY_HEAVY: "29/03/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "INCLINE CLOSE GRIP BENCH PRESS", weight: "87.5", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "75", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP — BAND SUPPORT", weight: "BW", sets: "3", reps: "7" },
              { exercise: "CABLE BAR PULLS", weight: "55", sets: "3", reps: "10" },
              { exercise: "EZ bar strict curl SS", weight: "30", sets: "3", reps: "10" },
              { exercise: "Cable skull crushers SS", weight: "30", sets: "3", reps: "12" },
              { exercise: "DB lateral raise (rack)", weight: "15", sets: "3", reps: "12" },
              { exercise: "Reverse curls — barbell", weight: "20", sets: "3", reps: "12" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "15", sets: "3", reps: "12" },
              { exercise: "Back Off Sets", weight: "5", sets: "2", reps: "12", isBackOff: true },
              { exercise: "Weighted pull up", weight: "15", sets: "3", reps: "2" },
              { exercise: "Preacher curls SS", weight: "12.5", sets: "3", reps: "10" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "30", sets: "3", reps: "12" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "4", reps: "12" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Dumbbell Shoulder press", weight: "30", sets: "3", reps: "8" },
              { exercise: "Back Off Sets", weight: "20", sets: "2", reps: "12", isBackOff: true },
              { exercise: "ISO HOLDS", weight: "2.5", sets: "4", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "3", reps: "12" },
              { exercise: "EZ BAR CURLS", weight: "25", sets: "3", reps: "10" },
              { exercise: "Close grip bench press", weight: "45", sets: "3", reps: "12" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "12" },
              { exercise: "Cable lateral raises", weight: "10", sets: "3", reps: "12" },
            ],
          },
        },
        {
          label: "Week 5",
          dates: { WEEKEND_HEAVY: "06/04/2025", WEEKDAY_MEDIUM: "09/04/2025", WEEKDAY_HEAVY: "11/04/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "INCLINE CLOSE GRIP BENCH PRESS", weight: "90", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "77.5", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP — BAND SUPPORT", weight: "BW", sets: "3", reps: "8" },
              { exercise: "CABLE BAR PULLS", weight: "55", sets: "3", reps: "10" },
              { exercise: "EZ bar strict curl SS", weight: "30", sets: "4", reps: "10" },
              { exercise: "Cable skull crushers SS", weight: "30", sets: "4", reps: "12" },
              { exercise: "DB lateral raise (rack)", weight: "15", sets: "4", reps: "12" },
              { exercise: "Reverse curls — barbell", weight: "20", sets: "4", reps: "12" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "20", sets: "3", reps: "8" },
              { exercise: "Back Off Sets", weight: "10", sets: "2", reps: "12", isBackOff: true },
              { exercise: "Weighted pull up", weight: "15", sets: "4", reps: "2" },
              { exercise: "Preacher curls SS", weight: "12.5", sets: "4", reps: "10" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "30", sets: "4", reps: "12" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "4", reps: "12" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Dumbbell Shoulder press", weight: "30", sets: "3", reps: "9" },
              { exercise: "Back Off Sets", weight: "20", sets: "2", reps: "12", isBackOff: true },
              { exercise: "ISO HOLDS", weight: "5", sets: "4", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "3", reps: "12" },
              { exercise: "EZ BAR CURLS", weight: "25", sets: "3", reps: "10" },
              { exercise: "Close grip bench press", weight: "50", sets: "3", reps: "12" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "12" },
              { exercise: "Cable lateral raises", weight: "10", sets: "3", reps: "12" },
            ],
          },
        },
        {
          label: "Week 6",
          dates: { WEEKEND_HEAVY: "13/04/2025", WEEKDAY_MEDIUM: "16/04/2025", WEEKDAY_HEAVY: "19/04/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "INCLINE CLOSE GRIP BENCH PRESS", weight: "92.5", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "77.5", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP — BAND SUPPORT", weight: "BW", sets: "3", reps: "9" },
              { exercise: "CABLE BAR PULLS", weight: "60", sets: "3", reps: "10" },
              { exercise: "EZ bar strict curl SS", weight: "30", sets: "4", reps: "12" },
              { exercise: "Cable skull crushers SS", weight: "30", sets: "4", reps: "15" },
              { exercise: "DB lateral raise (rack)", weight: "15", sets: "3", reps: "15" },
              { exercise: "Reverse curls — barbell", weight: "20", sets: "3", reps: "10" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "20", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "10", sets: "2", reps: "12", isBackOff: true },
              { exercise: "Weighted pull up", weight: "20", sets: "3", reps: "2" },
              { exercise: "Preacher curls SS", weight: "15", sets: "3", reps: "8" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "30", sets: "3", reps: "12" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "4", reps: "12" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Dumbbell Shoulder press", weight: "30", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "20", sets: "2", reps: "12", isBackOff: true },
              { exercise: "ISO HOLDS", weight: "10", sets: "4", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "22.5", sets: "3", reps: "12" },
              { exercise: "EZ BAR CURLS", weight: "30", sets: "3", reps: "10" },
              { exercise: "Close grip bench press", weight: "55", sets: "3", reps: "12" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "12" },
              { exercise: "Cable lateral raises", weight: "10", sets: "3", reps: "12" },
            ],
          },
        },
      ],
    },
    {
      block: "BLOCK 2",
      weeks: [
        {
          label: "Week 1",
          dates: { WEEKEND_HEAVY: "27/04/2025", WEEKDAY_MEDIUM: "30/04/2025", WEEKDAY_HEAVY: "02/05/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "AD PRESS", weight: "75", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "65", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP", weight: "BW", sets: "3", reps: "10" },
              { exercise: "CABLE rows", weight: "50", sets: "3", reps: "10" },
              { exercise: "EZ bar strict curl SS", weight: "35", sets: "3", reps: "8" },
              { exercise: "Cable skull crushers SS", weight: "30", sets: "3", reps: "12" },
              { exercise: "Cable lateral raises", weight: "15", sets: "4", reps: "10" },
              { exercise: "ROPE CURLS", weight: "25", sets: "4", reps: "12" },
              { exercise: "TRICEP PUSHDOWNS", weight: "25", sets: "4", reps: "12" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "25", sets: "3", reps: "8" },
              { exercise: "Back Off Sets", weight: "10", sets: "3", reps: "10", isBackOff: true },
              { exercise: "Weighted Chin up", weight: "10", sets: "3", reps: "3" },
              { exercise: "Preacher curls SS", weight: "15", sets: "3", reps: "10" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "20", sets: "3", reps: "10" },
              { exercise: "EZ BAR SKULL CRUSH", weight: "25", sets: "3", reps: "10" },
              { exercise: "Rear delt cable face pulls", weight: "10", sets: "3", reps: "15" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Incline Dumbbell Chest press", weight: "30", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "20", sets: "2", reps: "12", isBackOff: true },
              { exercise: "ISO HOLDS + 2x BW PULL UP", weight: "10", sets: "3", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "15", sets: "3", reps: "12" },
              { exercise: "Cable curls long bar SS", weight: "25", sets: "3", reps: "10" },
              { exercise: "CLOSE GRIP BENCH PRESS SS", weight: "60", sets: "3", reps: "8" },
              { exercise: "Single arm tricep pushdowns", weight: "10", sets: "3", reps: "15" },
              { exercise: "Dumbbell lateral raises", weight: "12.5", sets: "3", reps: "10" },
            ],
          },
        },
        {
          label: "Week 2",
          dates: { WEEKEND_HEAVY: "05/05/2025", WEEKDAY_MEDIUM: "07/05/2025", WEEKDAY_HEAVY: "09/05/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "AD PRESS", weight: "77.5", sets: "1", reps: "1" },
              { exercise: "Back Off Sets", weight: "65", sets: "3", reps: "Same as top set", isBackOff: true },
              { exercise: "PULL UP", weight: "BW", sets: "3", reps: "10" },
              { exercise: "CABLE rows", weight: "55", sets: "3", reps: "10" },
              { exercise: "EZ bar strict curl SS", weight: "35", sets: "3", reps: "8" },
              { exercise: "Cable skull crushers SS", weight: "30", sets: "3", reps: "12" },
              { exercise: "Rear delt cable pulls", weight: "20", sets: "3", reps: "12" },
              { exercise: "ROPE CURLS", weight: "25", sets: "4", reps: "12" },
              { exercise: "TRICEP PUSHDOWNS", weight: "25", sets: "4", reps: "12" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Weighted Push ups", weight: "25", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "10", sets: "3", reps: "10", isBackOff: true },
              { exercise: "Weighted Chin up", weight: "10", sets: "3", reps: "3" },
              { exercise: "Preacher curls SS", weight: "15", sets: "3", reps: "10" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "25", sets: "3", reps: "10" },
              { exercise: "EZ BAR SKULL CRUSH", weight: "30", sets: "3", reps: "12" },
              { exercise: "Rear delt cable face pulls", weight: "15", sets: "3", reps: "15" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Incline Dumbbell Chest press", weight: "35", sets: "3", reps: "6" },
              { exercise: "Back Off Sets", weight: "20", sets: "2", reps: "12", isBackOff: true },
              { exercise: "ISO HOLDS + 2x BW PULL UP", weight: "10", sets: "3", reps: "5 sec" },
              { exercise: "Rear delt cable face pulls", weight: "20", sets: "3", reps: "12" },
              { exercise: "Cable curls long bar SS", weight: "25", sets: "3", reps: "12" },
              { exercise: "CLOSE GRIP BENCH PRESS SS", weight: "60", sets: "3", reps: "9" },
              { exercise: "Single arm tricep pushdowns", weight: "10", sets: "3", reps: "10" },
              { exercise: "Dumbbell lateral raises", weight: "15", sets: "3", reps: "15" },
            ],
          },
        },
      ],
    },
    {
      block: "BLOCK 3",
      weeks: [
        {
          label: "Week 1",
          dates: { WEEKEND_HEAVY: "22/06/2025", WEEKDAY_MEDIUM: "24/06/2025", WEEKDAY_HEAVY: "27/06/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "OHP", weight: "55", sets: "1", reps: "2" },
              { exercise: "Back Off Sets", weight: "30", sets: "3", reps: "8", isBackOff: true },
              { exercise: "Wide grip cable rows", weight: "60", sets: "3", reps: "10" },
              { exercise: "Face pull seated", weight: "20", sets: "3", reps: "12" },
              { exercise: "EZ bar strict curl SS", weight: "25", sets: "3", reps: "10" },
              { exercise: "Cable skull crushers SS", weight: "35", sets: "4", reps: "10" },
              { exercise: "Seated lateral raises", weight: "10", sets: "3", reps: "15" },
              { exercise: "Reverse curls — barbell", weight: "25", sets: "3", reps: "10" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Incline Weighted Push ups", weight: "20", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "BW", sets: "2", reps: "12", isBackOff: true },
              { exercise: "Pull ups strict form", weight: "BW", sets: "3", reps: "5" },
              { exercise: "Preacher curls SS", weight: "15", sets: "3", reps: "8" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "30", sets: "3", reps: "12" },
              { exercise: "Rear delt cable face pulls", weight: "25", sets: "3", reps: "10" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Incline close grip bench press", weight: "65", sets: "3", reps: "8" },
              { exercise: "Back Off Sets", weight: "50", sets: "2", reps: "Same as top set", isBackOff: true },
              { exercise: "ISO HOLDS + 4x BW CHIN UP", weight: "20", sets: "3", reps: "5 sec" },
              { exercise: "Pike push ups", weight: "BW", sets: "3", reps: "12" },
              { exercise: "Cable curls long bar", weight: "25", sets: "3", reps: "10" },
              { exercise: "Overhead cable triceps", weight: "25", sets: "3", reps: "15" },
              { exercise: "Tricep pushdowns short bar SS", weight: "25", sets: "3", reps: "15" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "10", sets: "3", reps: "12" },
              { exercise: "Cable lateral raises", weight: "5", sets: "3", reps: "10" },
            ],
          },
        },
        {
          label: "Week 6",
          dates: { WEEKEND_HEAVY: "27/07/2025", WEEKDAY_MEDIUM: "31/07/2025", WEEKDAY_HEAVY: "03/08/2025" },
          sessions: {
            WEEKEND_HEAVY: [
              { exercise: "OHP", weight: "67.5", sets: "1", reps: "2" },
              { exercise: "Back Off Sets", weight: "40", sets: "3", reps: "8", isBackOff: true },
              { exercise: "Wide grip cable rows", weight: "75", sets: "3", reps: "10" },
              { exercise: "Face pull seated", weight: "30", sets: "3", reps: "8" },
              { exercise: "EZ bar strict curl SS", weight: "35", sets: "3", reps: "8" },
              { exercise: "Cable skull crushers SS", weight: "40", sets: "4", reps: "10" },
              { exercise: "Seated lateral raises", weight: "15", sets: "3", reps: "8" },
            ],
            WEEKDAY_MEDIUM: [
              { exercise: "Incline Weighted Push ups", weight: "30", sets: "3", reps: "12" },
              { exercise: "Back Off Sets", weight: "15", sets: "2", reps: "12", isBackOff: true },
              { exercise: "Pull ups strict form", weight: "BW", sets: "3", reps: "7" },
              { exercise: "Preacher curls SS", weight: "17.5", sets: "3", reps: "10" },
              { exercise: "Tricep Long bar pushdowns SS", weight: "35", sets: "3", reps: "12" },
              { exercise: "Rear delt cable face pulls", weight: "30", sets: "3", reps: "8" },
            ],
            WEEKDAY_HEAVY: [
              { exercise: "Incline close grip bench press", weight: "70", sets: "3", reps: "10" },
              { exercise: "Back Off Sets", weight: "55", sets: "2", reps: "Same as top set", isBackOff: true },
              { exercise: "ISO HOLDS + 5x BW CHIN UP", weight: "22.5", sets: "3", reps: "5 sec" },
              { exercise: "Cable curls long bar", weight: "30", sets: "3", reps: "8" },
              { exercise: "Overhead cable triceps", weight: "32.5", sets: "3", reps: "12" },
              { exercise: "Tricep pushdowns short bar SS", weight: "35", sets: "3", reps: "12" },
              { exercise: "Strict hammer curls FAT GRIPZ", weight: "15", sets: "3", reps: "10" },
              { exercise: "Cable lateral raises", weight: "7.5", sets: "3", reps: "10" },
            ],
          },
        },
      ],
    },
  ],
};

const SESSION_CONFIG = {
  WEEKEND_HEAVY:  { label: "WEEKEND — HEAVY",  accent: "#EF4444" },
  WEEKDAY_MEDIUM: { label: "WEEKDAY — MEDIUM", accent: "#F59E0B" },
  WEEKDAY_HEAVY:  { label: "WEEKDAY — HEAVY",  accent: "#3B82F6" },
};

const MAX_HISTORY = 30;

function Editable({ value, onSave, style, placeholder = "…" }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);
  const ref = useRef(null);
  useEffect(() => { setVal(value); }, [value]);
  useEffect(() => { if (editing && ref.current) ref.current.focus(); }, [editing]);
  const commit = () => {
    setEditing(false);
    if (val.trim() !== String(value)) onSave(val.trim() || String(value));
  };
  if (editing) return (
    <input ref={ref} value={val}
      onChange={e => setVal(e.target.value)}
      onBlur={commit}
      onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") { setVal(value); setEditing(false); } }}
      style={{ background: "#1c1c1c", border: "1px solid #3B82F6", borderRadius: 4, color: "#f0f0f0", padding: "2px 6px", outline: "none", fontFamily: "inherit", width: "100%", boxSizing: "border-box", ...style }} />
  );
  return (
    <span onClick={() => setEditing(true)} title="Click to edit"
      style={{ cursor: "text", borderRadius: 3, padding: "2px 4px", display: "inline-block", transition: "background 0.12s", ...style }}
      onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
      {value || <span style={{ color: "#333", fontStyle: "italic" }}>{placeholder}</span>}
    </span>
  );
}

export default function GymDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [activeBlockIdx, setActiveBlockIdx] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [toast, setToast] = useState(null);
  const saveTimer = useRef(null);

  const showToast = (msg, color = "#22c55e") => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 2000);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const { data: rows, error } = await supabase
          .from("dashboard")
          .select("*")
          .eq("id", 1)
          .single();
        if (error || !rows) {
          await supabase.from("dashboard").upsert({ id: 1, payload: INITIAL_DATA });
          setData(INITIAL_DATA);
        } else {
          setData(rows.payload);
        }
      } catch {
        setData(INITIAL_DATA);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const saveToCloud = useCallback((newData) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      try {
        await supabase.from("dashboard").upsert({ id: 1, payload: newData });
        showToast("✓ Saved to cloud");
      } catch {
        showToast("⚠ Save failed", "#EF4444");
      }
    }, 800);
  }, []);

  const update = (newData) => {
    setHistory(h => [...h.slice(-MAX_HISTORY), data]);
    setData(newData);
    saveToCloud(newData);
  };

  const undo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setData(prev);
    saveToCloud(prev);
    showToast("↩ Undone", "#a78bfa");
  };

  const clone = () => JSON.parse(JSON.stringify(data));

  const setLogName = v => { const d = clone(); d.logName = v; update(d); };
  const setProgrammeName = v => { const d = clone(); d.programmeName = v; update(d); };
  const setBlockName = (bi, v) => { const d = clone(); d.blocks[bi].block = v; update(d); };
  const setWeekLabel = (bi, wi, v) => { const d = clone(); d.blocks[bi].weeks[wi].label = v; update(d); };
  const setDate = (bi, wi, sk, v) => { const d = clone(); d.blocks[bi].weeks[wi].dates[sk] = v; update(d); };
  const setExField = (bi, wi, sk, ei, field, v) => { const d = clone(); d.blocks[bi].weeks[wi].sessions[sk][ei][field] = v; update(d); };

  const addBlock = () => {
    const d = clone();
    d.blocks.push({ block: `BLOCK ${d.blocks.length + 1}`, weeks: [{ label: "Week 1", dates: { WEEKEND_HEAVY: "DD/MM/YYYY", WEEKDAY_MEDIUM: "DD/MM/YYYY", WEEKDAY_HEAVY: "DD/MM/YYYY" }, sessions: { WEEKEND_HEAVY: [], WEEKDAY_MEDIUM: [], WEEKDAY_HEAVY: [] } }] });
    update(d); setActiveBlockIdx(d.blocks.length - 1); setActiveWeek(0);
  };

  const deleteBlock = (bi) => {
    const d = clone();
    if (d.blocks.length === 1) return;
    d.blocks.splice(bi, 1);
    update(d); setActiveBlockIdx(0); setActiveWeek(0);
  };

  const addWeek = (bi) => {
    const d = clone();
    const weeks = d.blocks[bi].weeks;
    const template = weeks.length ? JSON.parse(JSON.stringify(weeks[weeks.length - 1])) : { label: "Week 1", dates: { WEEKEND_HEAVY: "DD/MM/YYYY", WEEKDAY_MEDIUM: "DD/MM/YYYY", WEEKDAY_HEAVY: "DD/MM/YYYY" }, sessions: { WEEKEND_HEAVY: [], WEEKDAY_MEDIUM: [], WEEKDAY_HEAVY: [] } };
    template.label = `Week ${weeks.length + 1}`;
    weeks.push(template);
    update(d); setActiveWeek(weeks.length - 1);
  };

  const deleteWeek = (bi, wi) => {
    const d = clone();
    if (d.blocks[bi].weeks.length === 1) return;
    d.blocks[bi].weeks.splice(wi, 1);
    update(d); setActiveWeek(Math.max(0, wi - 1));
  };

  const addExercise = (bi, wi, sk) => {
    const d = clone();
    d.blocks[bi].weeks[wi].sessions[sk].push({ exercise: "New Exercise", weight: "0", sets: "3", reps: "10" });
    update(d);
  };

  const deleteExercise = (bi, wi, sk, ei) => {
    const d = clone();
    d.blocks[bi].weeks[wi].sessions[sk].splice(ei, 1);
    update(d);
  };

  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#080808", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ color: "#444", fontSize: 14, letterSpacing: "0.1em" }}>LOADING...</div>
    </div>
  );

  const blocks = data.blocks;
  const blockData = blocks[activeBlockIdx] || blocks[0];
  const weeks = blockData.weeks;
  const currentWeek = weeks[activeWeek] || weeks[0];

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: "#e8e8e8" }}>

      {toast && (
        <div style={{ position: "fixed", top: 24, right: 24, zIndex: 9999, background: "#111", border: `1px solid ${toast.color}`, color: toast.color, padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", boxShadow: `0 0 20px ${toast.color}33` }}>
          {toast.msg}
        </div>
      )}

      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "24px 32px 0", background: "#0a0a0a" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <Editable value={data.logName} onSave={setLogName} style={{ fontSize: 22, fontWeight: 700, color: "#f0f0f0" }} />
            <span style={{ color: "#252525", fontSize: 18 }}>·</span>
            <Editable value={data.programmeName} onSave={setProgrammeName} style={{ fontSize: 14, letterSpacing: "0.1em", color: "#555", textTransform: "uppercase" }} />
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: "0.06em" }}>Click any text to edit</span>
            <button onClick={undo} disabled={!history.length}
              style={{ padding: "8px 18px", background: history.length ? "#181818" : "#0f0f0f", color: history.length ? "#a78bfa" : "#2a2a2a", border: `1px solid ${history.length ? "#2e2e2e" : "#161616"}`, borderRadius: 6, cursor: history.length ? "pointer" : "default", fontSize: 13, fontWeight: 600 }}>
              ↩ Undo
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "flex-end", flexWrap: "wrap" }}>
          {blocks.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <button onClick={() => { setActiveBlockIdx(i); setActiveWeek(0); }}
                style={{ padding: "11px 22px", borderRadius: "7px 0 0 0", background: activeBlockIdx === i ? "#e8e8e8" : "transparent", color: activeBlockIdx === i ? "#080808" : "#444", border: "none", cursor: "pointer", fontSize: activeBlockIdx === i ? 14 : 13, fontWeight: activeBlockIdx === i ? 700 : 400, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                {activeBlockIdx === i ? <Editable value={b.block} onSave={v => setBlockName(i, v)} style={{ fontSize: 14, fontWeight: 700, color: "#080808" }} /> : b.block}
              </button>
              {activeBlockIdx === i && blocks.length > 1 && (
                <button onClick={() => deleteBlock(i)} style={{ padding: "11px 8px 11px 0", background: "#e8e8e8", border: "none", cursor: "pointer", color: "#888", fontSize: 13, borderRadius: "0 7px 0 0" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#EF4444"}
                  onMouseLeave={e => e.currentTarget.style.color = "#888"}>×</button>
              )}
            </div>
          ))}
          <button onClick={addBlock} style={{ padding: "11px 16px", background: "transparent", color: "#2a2a2a", border: "none", cursor: "pointer", fontSize: 13, borderRadius: "6px 6px 0 0" }}>+ Block</button>
        </div>
      </div>

      <div style={{ padding: "28px 32px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
          {weeks.map((week, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <button onClick={() => setActiveWeek(i)}
                style={{ padding: "9px 18px", background: activeWeek === i ? "#1c1c1c" : "transparent", color: activeWeek === i ? "#e8e8e8" : "#404040", border: `1px solid ${activeWeek === i ? "#2e2e2e" : "#181818"}`, borderRight: activeWeek === i && weeks.length > 1 ? "none" : undefined, borderRadius: weeks.length > 1 && activeWeek === i ? "6px 0 0 6px" : "6px", cursor: "pointer", fontSize: 13, fontWeight: activeWeek === i ? 600 : 400, letterSpacing: "0.06em" }}>
                {activeWeek === i ? <Editable value={week.label} onSave={v => setWeekLabel(activeBlockIdx, i, v)} style={{ fontSize: 13, fontWeight: 600, color: "#e8e8e8" }} /> : week.label}
              </button>
              {activeWeek === i && weeks.length > 1 && (
                <button onClick={() => deleteWeek(activeBlockIdx, i)} style={{ padding: "9px 10px", background: "#1c1c1c", border: "1px solid #2e2e2e", borderLeft: "none", borderRadius: "0 6px 6px 0", cursor: "pointer", color: "#333", fontSize: 14 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#EF4444"}
                  onMouseLeave={e => e.currentTarget.style.color = "#333"}>×</button>
              )}
            </div>
          ))}
          <button onClick={() => addWeek(activeBlockIdx)} style={{ padding: "9px 16px", background: "transparent", color: "#2a2a2a", border: "1px dashed #1e1e1e", borderRadius: 6, cursor: "pointer", fontSize: 13 }}>+ Week</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {Object.entries(currentWeek.sessions).map(([sessionKey, exercises]) => {
            const config = SESSION_CONFIG[sessionKey] || { label: sessionKey, accent: "#888" };
            const sessionDate = currentWeek.dates?.[sessionKey] || "";
            return (
              <div key={sessionKey} style={{ background: "#0e0e0e", border: "1px solid #1a1a1a", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: `2px solid ${config.accent}`, background: "#0b0b0b" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 9, height: 9, borderRadius: "50%", background: config.accent, boxShadow: `0 0 10px ${config.accent}` }} />
                      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: config.accent }}>{config.label}</span>
                    </div>
                    <Editable value={sessionDate} onSave={v => setDate(activeBlockIdx, activeWeek, sessionKey, v)} style={{ fontSize: 13, color: "#484848" }} placeholder="DD/MM/YYYY" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 95px 28px", gap: 8, padding: "8px 20px 6px", borderBottom: "1px solid #141414" }}>
                  {["Exercise", "kg", "Sets × Reps", ""].map((h, i) => (
                    <span key={i} style={{ fontSize: 10, color: "#282828", letterSpacing: "0.12em", textTransform: "uppercase" }}>{h}</span>
                  ))}
                </div>

                <div style={{ padding: "4px 0" }}>
                  {exercises.map((ex, ei) => (
                    <div key={ei} style={{ display: "grid", gridTemplateColumns: "1fr 70px 95px 28px", alignItems: "center", padding: "10px 20px", borderBottom: ei < exercises.length - 1 ? "1px solid #121212" : "none", gap: 8 }}>
                      <Editable value={ex.exercise} onSave={v => setExField(activeBlockIdx, activeWeek, sessionKey, ei, "exercise", v)}
                        style={{ fontSize: ex.isBackOff ? 12 : 14, color: ex.isBackOff ? "#383838" : "#d0d0d0", fontStyle: ex.isBackOff ? "italic" : "normal" }} placeholder="Exercise name" />
                      <Editable value={String(ex.weight)} onSave={v => setExField(activeBlockIdx, activeWeek, sessionKey, ei, "weight", v)}
                        style={{ fontSize: 15, fontWeight: 700, color: ex.isBackOff ? "#2a2a2a" : "#f0f0f0", fontVariantNumeric: "tabular-nums" }} placeholder="kg" />
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Editable value={String(ex.sets)} onSave={v => setExField(activeBlockIdx, activeWeek, sessionKey, ei, "sets", v)} style={{ fontSize: 13, color: "#606060" }} placeholder="sets" />
                        <span style={{ fontSize: 11, color: "#252525" }}>×</span>
                        <Editable value={String(ex.reps)} onSave={v => setExField(activeBlockIdx, activeWeek, sessionKey, ei, "reps", v)} style={{ fontSize: 13, color: "#606060" }} placeholder="reps" />
                      </div>
                      <button onClick={() => deleteExercise(activeBlockIdx, activeWeek, sessionKey, ei)}
                        style={{ background: "none", border: "none", color: "#1e1e1e", cursor: "pointer", fontSize: 18, padding: 0, lineHeight: 1 }}
                        onMouseEnter={e => e.currentTarget.style.color = "#EF4444"}
                        onMouseLeave={e => e.currentTarget.style.color = "#1e1e1e"}>×</button>
                    </div>
                  ))}
                </div>

                <button onClick={() => addExercise(activeBlockIdx, activeWeek, sessionKey)}
                  style={{ width: "100%", padding: "12px", background: "transparent", border: "none", borderTop: "1px solid #121212", color: "#242424", cursor: "pointer", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#141414"; e.currentTarget.style.color = "#555"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#242424"; }}>
                  + Add Exercise
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
