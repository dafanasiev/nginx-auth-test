function validate(r){
    r.subrequest("/javascript-auth-cb", r.variables.args, function(res){
        if(res.status == 200) {
            r.variables.auth_userId = res.headersOut['X-EFTR-UserId'];
            r.variables.auth_sessionId = res.headersOut['X-EFTR-SessionId'];
        }
        r.return(res.status);
        return;
    });
}
