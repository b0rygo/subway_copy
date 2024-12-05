from django.db import models

class Item(models.Model):
    img = models.ImageField(null=True, blank=True)
    name = models.CharField(max_length=200)
    text = models.CharField(max_length=500)
    price = models.FloatField()

    def __str__(self):
        return str(self.name)
