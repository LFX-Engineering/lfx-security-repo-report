# LFX Security Repository Report

This tool wraps the [Repository Reporting
tool](https://github.com/ljharb/repo-report) as an AWS lambda so that we can
generate the report for each active project/repository onboarded within LFX
Security. The tool accepts a payload with details on the project, repository and
GitHub authorization. Once the tool performs the analysis, the results are
packaged up and sent to the LFX Security API for storage and later retrieval.

## Deployment

```bash
yarn deploy:dev
```

## Command Line Testing

```bash
# First: Log into your AWS account for the appropriate environment
# Second: invoke using the desired payload, adjust the target repository and provide a GitHub authorization token value
aws --region us-east-2 lambda invoke \
  --function-name lfx-security-ossf-scanner \
  --cli-binary-format raw-in-base64-out \
  --payload '{"project_id":"...", "project_sfid": "...", "repository_id": "...", "repository_url":"github.com/communitybridge/easycla", "github_auth_token":"ghs_XXXX..."}' \
  out.txt
```

## References

- [Repository Reporting Tool - GitHub](https://github.com/ljharb/repo-report)
- [LFX Security API](https://github.com/LF-Engineering/lfx-security)
- [LFX Security Console](https://github.com/LF-Engineering/vulnerability-detection)

## License

Copyright The Linux Foundation and each contributor to LFX.

This project’s source code is licensed under the MIT License. A copy of the license is available in LICENSE.

The project leverages source code from the [Open Source Security Foundation's (OSSF) - Criticality
Score](https://github.com/ossf/criticality_score), which is licensed under the Apache License, version 2.0
\(Apache-2.0\),

This project’s documentation is licensed under the Creative Commons Attribution 4.0 International License \(CC-BY-4.0\).
A copy of the license is available in LICENSE-docs.
