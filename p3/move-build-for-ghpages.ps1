# PowerShell script to move Angular build output for GitHub Pages
# Run this after ng build --output-path docs --base-href /

$source = "docs/browser/*"
$destination = "docs"

# Copy all files from docs/browser to docs (overwrite if needed)
Copy-Item -Path $source -Destination $destination -Recurse -Force

# If there is an assets folder, copy it too
if (Test-Path "docs/browser/assets") {
    Copy-Item -Path "docs/browser/assets" -Destination "docs" -Recurse -Force
}

# Restore .nojekyll if it was deleted
if (-not (Test-Path "docs/.nojekyll")) {
    New-Item -Path "docs/.nojekyll" -ItemType File | Out-Null
}

Write-Host "Angular build output moved to docs root for GitHub Pages."