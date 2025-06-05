# r2drive

## TODO

- [x] Setup database and data model
- [x] Move folder open state to URL
- [x] Add auth
- [x] Add file uploading
- [x] Add Posthog analytics
- [x] Sort files and folders order
- [x] Add delete functionality
- [x] Real homepage and onboarding

## Follow-ups

### - [ ] Folder creation
Make a server action that takes name, parentId, and ownerId, and creates the folder using the same

### - [ ] Folder renames

### - [ ] Access controls
Check is the user is the owner beforing showing the folder and contents

### - [ ] Toasts, loaders, animation
Successful uploads, uploading, download, etc

### - [ ] Grey out a row when it's being deleted
Either set a state in the client component, or use transition hooks (difficult)

### - [x] Folder delete functionality
Fetch all the children folders and the files in it subsequently 

## Cloudflare R2 Implementation
 - http://localhost:3000/rf/1

## References

- [x] https://developers.cloudflare.com/r2/api/s3/presigned-urls/
- [x] https://github.com/harshil1712/nextjs-r2-demo/tree/main
