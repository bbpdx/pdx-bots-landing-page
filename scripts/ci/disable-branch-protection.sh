#!/usr/bin/env bash

curl \
-X PUT \
https://api.github.com/repos/pdxbots/pdx-bots-landing-page/branches/$GITHUB_BASE_REF/protection \
-H "Accept: application/vnd.github.v3+json" \
-H "Authorization: token $GITHUB_TOKEN" \
-H "Content-Type: application/json" \
--data-binary @- <<DATA
{
    "require_status_checks": null,
    "enforce_admins": false,
    "required_pull_request_reviews": null,
    "required_linear_history": false,
    "allow_force_pushes": false,
    "allow_deletions": false,
    "required_conversation_resolution": false,
    "restrictions": null
}
DATA
