import { DateTime, type Duration } from "luxon";
import { v4 as uuidv4 } from "uuid";

import { A, type B } from "@c/api";
import { C, D } from "@c/api/v2";
import { type E } from "@c/api/v3";

// #region Exported Functions (3)

export function gen(): string
{
    return uuidv4();
}

export function sum(a: A, b: B, c: C, d: D, e: E) { }

export function test(date: DateTime): Duration
{
    return date.diffNow('day');
}

// #endregion Exported Functions

test(DateTime.fromISO('2016-05-25T09:08:34.123+06:00'));
