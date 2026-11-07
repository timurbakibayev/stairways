#!/bin/bash
set -euo pipefail
cd /var/www/stairways
git pull --ff-only
chown -R root:www-data /var/www/stairways
chmod -R g+rX /var/www/stairways
nginx -t && systemctl reload nginx
