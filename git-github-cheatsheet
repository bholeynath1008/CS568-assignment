
## Branch Management: 
*  **Create a new branch**
git checkout -b <new_branch_name>

* **Clone a specific branch**
git clone -b <branch_name> <repository_url>

* **Push to a branch**
git push origin <branch_name>
* Alternatively, if you're already on the branch you wish to push:
`git push origin`

* **Delete a branch locally**
git branch -d <branch_name>

* **Force delete a branch locally**
git branch -D <branch_name>

* **Switch to an existing branch**
git checkout <branch_name>

* **Pull updates from a remote branch**
git pull origin <your_branch>


## Merge changes from main branch into current branch(<Anjana_branch>)

### Working branch: <Anjana_branch>

* 1. **Switch to <Anjana_branch>**
git checkout <Anjana_branch>

* 2. **Pull changes from main branch**
git pull origin main

### Case 1:
* **If merge conflicts occur, undo the pull**
* 3a. Undo the pull
git reset --hard HEAD    * (or git merge --abort)

### Case 2:
* **After resolving conflicts, merge changes from main into your current branch**
* 4. **Merge changes from main into <Anjana_branch>**
git merge main

* After this, git will notify if conflicts need to be resolved. You will need to manually resolve them.
* Use your preferred code editor (e.g., VS Code) to manage conflicts.

* 5. **Commit the merge**
git commit -m "Merge main into <Anjana_branch>"

--------
Git Logs

# To see the commit history
git log

# To see the commit history in one line format
git log --oneline

# To see the commit history with date and time
git log --pretty=format:"%h - %an, %ar : %s"

----
git log : 
aaf8f4d - sarojregmi926, 7 minutes ago : Adding merge here
cb325ab - sarojregmi926, 17 minutes ago : Adding Readme7
c8fa2fc - sarojregmi926, 23 minutes ago : Update README.md
d4a1a9b - sarojregmi926, 30 minutes ago : Adding Readme6
eac96cb - sarojregmi926, 33 minutes ago : Adding Readme4
b25006a - sarojregmi926, 6 days ago : feat: add 5555kali22322
b1836b3 - sarojregmi926, 6 days ago : feat: add 5555kali22322

# Go to commit d4a1a9b (Adding Readme6)
git checkout d4a1a9b

# Create another branch from it
git checkout -b new_branch


Adding tag to Commit
---------
# Adding a tag to the new branch
## Tag the current commit
git tag tag_name d4a1a9b

## Push the tag to the remote repository
git push origin tag_name

---

## How to Undo a Mistaken Commit in Git
-----------
### Scenario
You have made three commits, but the third commit (commit 3: HEAD) was a mistake. You need to revert to commit 2 and continue working from there.

### Method 1: Using `git revert`
**Purpose:** To undo the changes of a specific commit while preserving the integrity of the project history. Ideal for situations where the commits have been shared publicly.

**Steps:**
1. **Identify the Commit to Revert**
   - Use `git log` to view the commit history and confirm the commit hash or reference.
   - Example:
     ```bash
     git log --oneline
     ```

2. **Revert the Commit**
   - Execute `git revert` followed by the commit hash or `HEAD` (for the most recent commit).
   - Example:
     ```bash
     git revert HEAD
     git revert <commit_hash> (if you want to revert commit 2, then use that hash)
     ```
   - Git will automatically create a new commit that undoes the changes from commit 3.

3. **Review and Commit**
   - Git opens a text editor to enter a commit message for the revert. Save and close the editor to complete the revert.
   - The project history now includes a new commit that negates the changes made in commit 3.

### Method 2: Using `git reset`
**Purpose:** To completely remove the last commit, making the repository state as it was at commit 2. Best used for local changes that have not been pushed to a shared repository.

**Steps:**
1. **Perform a Hard Reset**
   - This will discard changes in commit 3 and reset your current branch's HEAD to commit 2.
   - Example:
     ```bash
     git reset --hard HEAD^
     ```

2. **Handle Remote Repositories**
   - If commit 3 was already pushed to a remote repository, and it's safe to rewrite history (e.g., no other collaborators are affected), use the following command to update the remote:
     ```bash
     git push origin <branch-name> --force
     ```
   - Caution is advised when force-pushing, as it can affect other collaborators.

### When to Use Each Method
- **Use `git revert`** when you want to preserve the history or if the commits have already been shared with others. It’s safe and keeps a record of what was undone.
- **Use `git reset`** for local cleanup before you've shared your changes with others, as it simplifies history but at the risk of losing changes.







