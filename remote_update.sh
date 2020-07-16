#!/bin/bash
cd ../../PycharmProjects/faas-ovh-api
py deploy.py www.faas.ovh status.sh
::py deploy.py www.faas.ovh remove.sh
::py deploy.py www.faas.ovh install.sh
py deploy.py www.faas.ovh update.sh
cd ../../WebstormProjects/faas-ovh-www
