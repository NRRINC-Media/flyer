#!/bin/bash
ver="v1.3.1" #ex: v1.0.0 NO SPACES.
tar -zcvf flyer-$ver.tar.gz flyer demo.html
sha256sum flyer-$ver.tar.gz > flyer-$ver-sha256
echo "done"