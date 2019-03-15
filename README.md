* run it localy:
```
docker run --rm --network=host -v $(pwd):/hugo registry.gitlab.com/pages/hugo:latest /bin/sh -c "cd /hugo; ls;hugo server"
```
* generate site
```
docker run --rm --network=host -v $(pwd):/hugo registry.gitlab.com/pages/hugo:latest /bin/sh -c "cd /hugo; ls;hugo"
```
