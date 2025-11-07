FROM nginx:alpine

# Copy the HTML file to nginx
COPY index.html /usr/share/nginx/html/index.html

# Expose port 72
EXPOSE 72

# Start nginx
CMD ["nginx", "-g", "daemon off;"]