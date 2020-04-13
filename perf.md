
# client -> auth responder

```sh
ab -n 250000 -c 20 http://localhost:5001/
ab -n 250000 -k -c 20 http://localhost:5001/
```

32834.72 /  112773.75


# client -> nginx -> auth responder -> nginx
