#!/usr/bin/env bash

if [ "$GITHUB_BASE_REF" = "main"]; then
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
    "required_pull_request_reviews": {
        "required_approving_review_count": 1,
        "dismiss_stale_reviews": false
    },
    "allow_force_pushes": false,
    "allow_deletions": false,
    "required_conversation_resolution": false,
    "restrictions": null
}
DATA
fi
