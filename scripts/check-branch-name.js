const proc = require("child_process");

const re = /^((((DOC)-[0-9x]{1,5})|hotfix|fix)\/[a-zA-Z0-9\-\/_]+)$/;

const buff = proc.execSync("git rev-parse --abbrev-ref HEAD");
const branch = buff.toString().trim();

if (!re.test(branch)) {
    let message = "\nThere is something wrong with your branch nae.\n";
    message += "Branch names in this project must adhere to this contract: $valid_branch_regex\n";
    message += "Valid branch names are formatted like: DOC-1/doing-something\n";
    message += "You can rename your branch with: git branch -m 'DOC-xxxx/new-name'\n";
    console.error(message);
    throw new Error(message);
}

return;
